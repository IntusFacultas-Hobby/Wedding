
if [ $# -lt 1 ]; then
    echo "uploadfrontend (staging|static)"
    return -1
else
    pushd .
    cd static/css
    aws s3 cp app.css.gz s3://april-and-pedro-wedding/$1/css/app.css.gz --acl public-read --content-type "text/css" --content-encoding "gzip"
    aws s3 cp vendor.css.gz s3://april-and-pedro-wedding/$1/css/vendor.css.gz --acl public-read --content-type "text/css" --content-encoding "gzip"
    cd ../js
    aws s3 cp app.js.gz s3://april-and-pedro-wedding/$1/js/app.js.gz --acl public-read --content-type "application/javascript" --content-encoding "gzip"
    aws s3 cp vendor.js.gz s3://april-and-pedro-wedding/$1/js/vendor.js.gz --acl public-read --content-type "application/javascript" --content-encoding "gzip"
    cd ../img
    aws s3 sync . s3://april-and-pedro-wedding/$1/img --acl public-read
    popd
fi