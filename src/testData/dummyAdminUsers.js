const dummyAdminUsers = [
  {
    "id": 1,
    "account": "heyjohn",
    "name": "John Doe",
    "cover": "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1681084800&Signature=Z12uhWAX4ZpP2L9OBQzOCC7tFCM2VpXyftRhkgysoiJUMAmNYCZM7JRYDuxGRxg7GEGgrpySAXGMmXzx-qiYpncIY~pUS99syV5skBME0UkOJ6FZZ1SNPGssl2MH0ZACWSSTJHnlvqzGM~ex3gt6F5jIAcnjgxK7hubrdU6P0NvSiPH9Q4M41amdW04XO8-GnxdupwQpyO~qVq2HlNDvPI4iUH9FZAHGtEtUQFuZPrYfgamVBUkfsTlTHu-AoLry7llnLyfhWUiITe4gxuj-mB36u~ctd89x0fFhlMmlSSMVma4kfQ3iXjsBfMhtc6i6Ag5TBS3ykU8dlPmSg4ONJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "avatar": "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1681084800&Signature=aSoxYs723luM5ogg~pUZFAhNt15T5yUkreOWZ2tCSM7Xu7S~G1EUWezwKF6EdiquHep6kXiOJomrfxVAzYMKD2TccvRh1OsBZRVpAm7oyjOThbk24M-a6E9mVhBDlrSmW2dm0~-hApdyO8hvb1n~MdwZ~RMXlE8dhud3FQ6Y4sl36k~Omebfrncq7PvI1qv4mfnPQBOTaL8gTHmkJbe5ejuNY6ewbvX~14d5Na8YETfjQt6HlTV4L7JCt1qaNx1t1f4WKcrR0Gv2CeqtHmYM77L~IyWLMBtOFAWVsdHh9dSc66oNDW1MepaDyhA4EKh7~hJ-DqkImxAnhN~2zqTc3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "tweetCount": 1500,
    "likedCount": 20000,
    "followingCount": 34,
    "followerCount": 59
  },
  {
    "id": 2,
    "account": "heyjohn",
    "name": "John Doe",
    "cover": "https://s3-alpha-sig.figma.com/img/641b/8db0/2f0f14bdad23db8a6e4505aa59cd200d?Expires=1681084800&Signature=BtY3-ZrUtHrKQiNmqAls3xTICxySWAJouH0EY69JcgjcCww~SIHL3i0ztYhihu~Y~JZw4QKIuDlA2H64QoMi45sUXlKJ3UMOQ1ZIFgM1owabFaoyowGwk5QDQIX8oUeOz7fAtIHUdELlkHB9~FObuKQZm38-7K7-m5xo~06ppnxwPAnEueSM-zSjRqzsxOqV3GLJjRGLcBcTsqOhSfhbvsozDuu0024~VIOP1diKuMoEyC3xFYzxkdK5eASToY5vGj9m0HKg0VTfGkIA1g9uPVWB79xqgmMKxFDPchj78jgxQXFre6wVXGEko4DMoWmrqITYke142vYW4uYKFF0x5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "avatar": "https://s3-alpha-sig.figma.com/img/6f06/314f/6af2cd47038bc41a7139506bc8878485?Expires=1681084800&Signature=Lz5C4mUheJk694u7ahKNliJpNqY3mk9~ZWWkR6PwfJmCKZPtq6hKvZFTklFSAFrN0J~1yrJCqDq44L847N1~WQ7evMIWTrG5ATtEv87dJKeVIxMo5Ii4jY4zSdVi7YJb5ZIqEViMyVo1YpNBJwubhFqXnlp8qW5YWeR1SWAUZk1C7zVTGZo-AzpKCjmXOJ3Ask1GH~DG3FdvhhxuZqxNO9rGDdkw7QviNPrqRCcSByoAVBaOONAUiVCBVYALCF~mUf~TlvqdeYHoMdYxblp~H1U9fcjZkkY~UaISg06DfZK8GPue9Qhqvg0hNH7qR3D54rvmMTxMImaTU5en~38qEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "tweetCount": 1500,
    "likedCount": 20000,
    "followingCount": 34,
    "followerCount": 59
  },
  {
    "id": 3,
    "account": "heyjohn",
    "name": "John Doe",
    "cover": "https://s3-alpha-sig.figma.com/img/bfe4/e4c6/4215be497431a9ec0a8c1e2bde1819f4?Expires=1681084800&Signature=UkI01c3ID5BUJtHaTzuj-eRxKV9tXuNyaf2p9GX0r89qxtxsXCsh9zMledjoZ2iSVjpsCtPV823qbGJehUJGnHjV-ppjzRhi2~-kQ4vElQA0b7a4rZirpicmRT-fUp2gkHH6CRdAZfJ2CkdobJaik93aX~bDwJOR49Mdf0yEoNbv~oNJ4EO5SkOn9ZDAxL7I~QJGLX2AWDR4rk~iOLWfWB3uDo~EXBiZMPKf9elGCnzF4nwtHActX3mRxWuSwjeUQEsNFNBH4eA4IbinOJ5QdGD71Obo0kjSXCZfu03CPSwqSj08nQwH0joN7knjFdW6f85-iB2BmY30tA8l1XngMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "avatar": "https://s3-alpha-sig.figma.com/img/f987/449e/a06906c003b5dcfb73406882bf9a97f2?Expires=1681084800&Signature=gRdt6Wpi~qepcQ6OsFKihs5Esfw~9rDfhU9X6RWEcyHWB8NKK2k5W7kHBjH1O5BmSYfJWFoGgaYahwdPZlkIiV~hudv8IUV2kn4Rzv74lW6zymnzd-hgrEOY95Ho~4H~y6sn5UlL0dfg7A2M7r9Hl2fuhtlPvch6wiXsteTzbQhlBFSvHYECYhLprssATWF106xp1lThQQaSFh6AawFxgJcc8bdEdBbE7XnUt6PNVf13TZEzFnOtsqIO5AoQLDuVzwowhvLK12A3iwCM0eYE89ztlD-WviUNPHZIGS068DlgVJSvW31O6xTpcmrDaJHWkzhC0HUlAhAKNG3JpJChDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "tweetCount": 1500,
    "likedCount": 20000,
    "followingCount": 34,
    "followerCount": 59
  },
  {
    "id": 4,
    "account": "heyjohn",
    "name": "John Doe",
    "cover": "https://s3-alpha-sig.figma.com/img/7029/07a8/02e331b671d08e08b2e7274cdab1bd83?Expires=1681084800&Signature=BBkwxAm8Lxv6e1EwWX~X9HAXey0raP91mMUhy9NkRWkT53ydi9mTfodNiSKxk1ECs7Sw-iI-G2W0sqbrYUYL314BKtstxxRAikzwityjFaUUxWAiQwkTh8pm5XQG5CK9O43xkNaw~aFCvQDbxRuRQ5WPQS-e69UH35rFv9gOl3OlEepps1IFuEMPMxGfh7fegg6tDMfFtOUnMTGVDDjWyv27huC4LmK7n98bAcg46BvEt4pkauNLygPwOIrmbNiyamQ~spL6IAVA6tuUvTnVCpPeLbMkBFPaQbLofhtksUIRk7ymkVUeyjDpHXpjEgdA0ELvGi4XpgyO7caetgRXCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "avatar": "https://s3-alpha-sig.figma.com/img/5653/4285/d26bdf9951ccb3fa538aa0e9dbc37ff8?Expires=1681084800&Signature=YJYKLl7gXrt0-oQEg-deJl4C2c0Pv1Ad3tOx4rMnapRekzNxr-pUz1C027CIGwRqGts0DutaWWQwSWD83ZcslSbx779cSq7pWCvlw4rU4Rs2~BsTTFWG-FQUmK-sPOsMsHyJ~s9~2guL2hkmxoscxifutgEbYq7NYGT3kYme5H3Nop-kt71gk7S-9n7YHLUrjzVI4sWlSm-YxbhzMaP6oNk12lTJ-ywnPVpls5iRFkMlz~poWG0tNU-JYRSK3N0ijMHOiz0MAmAdoQK8OurmCo6tB0pKnpM0kVK7zXulIguHhnfKGZZYbgZtjFQRgVe~8z3b5YILcnYWlIKEWuyK~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "tweetCount": 1500,
    "likedCount": 20000,
    "followingCount": 34,
    "followerCount": 59
  },
  {
    "id": 5,
    "account": "heyjohn",
    "name": "John Doe",
    "cover": "https://s3-alpha-sig.figma.com/img/e0ff/415e/3a617846ca0af30836a1649b053b7331?Expires=1681084800&Signature=T2WD6MJuvCXO8ErmkHtTGL-iGZkrS9MWHzx6YuN87pQX--7UjenqMYRJmkQzevyb9rd8gEJms26crrguDhXrNGGXCcl8Kan6RPnYGuspVo3MVLvhEJkv6KiYUwhMpg2SRGCjyy95j0fEgehwt5H8HpEd5sEbIE2sd~th8AlAK7XtX2RJndEBLd2zxRQ8gASu9ZsaqrxsPf6upL3IrHCyhOSS-ZWY~L~9xQYt4Dmgvm7TEdWTgXWfryjIUdmVuxF3I8QuGdZVNm4Eu1YtIVDp-fPv-2FmAw8VlbFi8XmKqEMa8Effes3OSWwNH3xwObxwNLRX26mpl2xPNHhZ2pgpeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "avatar": "https://s3-alpha-sig.figma.com/img/6c3b/85f5/dc9563fee2c3c6efe94337a05bf7a5a1?Expires=1681084800&Signature=jHEyqfe05fZf9mOdu-9t7KUjWxm4RBvQ27~czJ1eQnxAEW48~5fXl8G-p09wS74zOQ0DgfBlXxUZYgAPtRH0Bobpf4m1le6X9s-fGdu9VDNL3ubpD3bjMUaPbmZq3UyXZJraL8-f6CO2aLRNk7gOF4rV4bpcN4WFBnM30QlP8W~tnhjeu3Wi426~RvctaBT1pB0u8jPpj2kDKC8Aoalmhqwaz9nbZKTdslOOpRAN8~D0DtKxw1c-lJxlipkPFpuhrXgOJRxZDk4-esD2eSjw8d6mLbhVY~esnseW6Swhb8qk~ke41qLzsGHSkCJY0smZySanDKkoVgYrqX5P3LLkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "tweetCount": 1500,
    "likedCount": 20000,
    "followingCount": 34,
    "followerCount": 59
  }
]

export { dummyAdminUsers }