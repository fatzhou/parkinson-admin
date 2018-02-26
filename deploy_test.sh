#!/bin/sh

npm run testing && rsync -r dist/* fatzhou@kuuvv.com:~/parkinsonadmin