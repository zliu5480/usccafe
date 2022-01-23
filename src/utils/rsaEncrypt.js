import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// Generated RSA key pair from this website: https://cryptotools.net/rsagen

const publicKey = "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGL7t4zac+TXA6PgdwUZRKLBPfZw\n" +
    "IQY/xKlWPCWL9zRTKV+zlWFPrt2xWleGj5p8fw1c+8mdz3f1lJ3PfE1xoElKIoHl\n" +
    "QWDwjCrrtp/QCPAEHMskaU0kOuOoRRnoTtBaT/MkZNpx08bKJHVopaTSl+hCeRfr\n" +
    "MeviVWEsPlllUZtZAgMBAAE="

// encrypt is for front end
export function encrypt(string) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // set public key
  return encryptor.encrypt(string) // encrypt
}

// const privateKey = "MIICWgIBAAKBgGL7t4zac+TXA6PgdwUZRKLBPfZwIQY/xKlWPCWL9zRTKV+zlWFP\n" +
//     "rt2xWleGj5p8fw1c+8mdz3f1lJ3PfE1xoElKIoHlQWDwjCrrtp/QCPAEHMskaU0k\n" +
//     "OuOoRRnoTtBaT/MkZNpx08bKJHVopaTSl+hCeRfrMeviVWEsPlllUZtZAgMBAAEC\n" +
//     "gYA5c68jAzzXa3GCcevDOtpauV0UqBqS/PpR62q3xFi0tzxBfwPKWqy9oo40VTcO\n" +
//     "zQoVoI3IhV+BWjprqp2Ueco1Y4fEyFeAjFsIKEz3kp6ARHDU/G2aeI0iw1U1V4BC\n" +
//     "fH+Mx2JFiDiWNFfJKYifUaEpYzQAV35nYZdOnJx0nCLOgQJBAMGkgoWppKAlSffb\n" +
//     "leBn7UuFKMeZjeKSHyiQV066hPR1W0RimNKby6TXmjKUpUzYPjSqZkjNodIbLLBU\n" +
//     "uYuRjXECQQCC27CJx+AlK+2CJVMewhiDUv/d077Prwfxb3pIMKvfhHR4I379KTnl\n" +
//     "ZkkKpXRrc5vyDqiDDxNh+KP/5k4ZHBhpAkA8kAgmZ71OPPtaYroIWli0AuyTKKpg\n" +
//     "j1Thaet0ew90KXQm+jNTw1g4sRnP8f+U/hjOffDJmk6fGNKsP4NcbGRxAkBzCMVs\n" +
//     "mbTFeJRV8JHdXCtIZtJfIyF+WRPWfnU0uPSejUYFxs5/ppoqu3xCS6jIPN0+MPya\n" +
//     "GcqkOXuSHddR44zhAkBYMeHYidLxHUK2ObGAD7rh96ilxxte/PdTLgg9vGqM+kXc\n" +
//     "KfVKx0K6AwUlXlQsSspGQTz9bLqUsS4vDEjR25MG"
//
// // encrypt is for back end
// export function decrypt(string) {
//   const encryptor = new JSEncrypt()
//   encryptor.setPrivateKey(privateKey) // set private key
//   return encryptor.decrypt(string) // decrypt
// }
