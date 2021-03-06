const ServiceReducer = require('./ServiceReducer')

class MicrosoftStorageServiceReducer extends ServiceReducer {
  /**
  * Sets the drive url
  * @param mailbox: the mailbox that contains the service
  * @param service: the service to update
  * @param driveUrl: the web url for the drive link
  */
  static setDriveUrl (mailbox, service, driveUrl) {
    return service.changeData({ driveUrl: driveUrl })
  }
}

module.exports = MicrosoftStorageServiceReducer
