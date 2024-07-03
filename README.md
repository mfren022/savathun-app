# Savathun

This project is available at [savathun.com](https://savathun.com).

## Deploying to production server

You must first connect to the server using an SFTP client such as [MobaXterm](https://mobaxterm.mobatek.net/download.html).

To deploy to the production server, you can build the project using `ng build`. The build files will be stored in the `dist/` directory.

All files in the `dist\` directory must then be copied to `\var\www\savathun.com\` on the remote server.