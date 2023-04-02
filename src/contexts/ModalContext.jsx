import { createPortal } from "react-dom"
import { createContext, useContext, useState, useEffect } from "react"
import { ReplyModal } from "components"
import { useAuth } from "./AuthContext"
import Swal from "sweetalert2"
// api 串接
import { replyTweet } from "api/tweets"

const defaultModalContext = {
  newReply: null,
  handleShowReplyModal: null
}
const ModalContext = createContext(defaultModalContext)

/**
 * 取得彈跳視窗相關邏輯
 * @returns 
 */
export const useModal = () => useContext(ModalContext)

/**
 * 提供彈跳視窗相關的邏輯 
 * @param {jsx} children - 放所有要透過 useModal 取得彈跳視窗相關邏輯 (ModalContext) 的 Component
 * @returns 
 */
export const ModalProvider = ({ children }) => {
  const [ newReply, setNewReply ] = useState(null)
  const [ showReplyModal, setShowReplyModal ] = useState(false)
  const [ tweetForReplyModal, setTweetForReplyModal ] = useState(null)
  const [ replyTweetResAlert, setReplyTweetResAlert] = useState(null)
  const { currentRegistrant, logout } = useAuth()

  // 顯示回覆推文成功與否的彈跳視窗
  useEffect(() => {
    if (replyTweetResAlert) {
      Swal.fire({
        title: replyTweetResAlert.title,
        icon: replyTweetResAlert.icon,
        html: (replyTweetResAlert.html) ? replyTweetResAlert.html : '',
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
      });
    }
  }, [replyTweetResAlert])
  
  // 處理回覆推文
  async function handleReplyTweet({ tweet, comment }){
    try {
      const response = await replyTweet({
          tweetId: tweet.id,
          comment
      })
      const logoutStatus = [401, 403]
        
      if (logoutStatus.includes(response.status)) {
        logout(response.data.message)

      } else if (response.status === 200) {
        const tempReply = response.data.reply

        setReplyTweetResAlert({
          title: '回覆成功!',
          icon: 'success',
          html: `<p>${response.data.message}</p>`
        })

        setNewReply({
          id: tempReply.id,
          TweetId: tempReply.TweetId,
          comment: tempReply.comment,
          createdAt: tempReply.createdAt,
          tweetAuthorId: tweet.UserId,
          tweetAuthorAccount: tweet.account,
          replyUserId: currentRegistrant.id,
          replyAccount: currentRegistrant.account,
          replyName: currentRegistrant.name,
          replyAvatar: currentRegistrant.avatar
        })

        setShowReplyModal(false)
          
      } else {
        setReplyTweetResAlert({
          title: '回覆失敗!',
          icon: 'error',
          html: `<p>${response.data.message}</p>`
        })
        setShowReplyModal(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalContext.Provider
      value={{
        newReply,
        handleShowReplyModal: (tweet) => {
          setTweetForReplyModal(tweet)
          setShowReplyModal(true)
        }
      }}
    >
      { children }

      {/* 回覆彈跳視窗 */}
      {(showReplyModal && tweetForReplyModal) && createPortal(
        <ReplyModal 
          userInfo={currentRegistrant}
          tweet={tweetForReplyModal}
          onClose={() => setShowReplyModal(false)}
          onReplyTweet={handleReplyTweet}
        />,
        document.body
      )}
    </ModalContext.Provider>
  )
}

