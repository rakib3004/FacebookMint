from copyreg import pickle
from minio import Minio

access_key = "BQ3l6t2S1semtlfU"
secret_key = "9FQ84eUMH4b2nk1GzP9FAvtqKlXmdHYJ"

client = Minio("127.0.0.1:9000", access_key, secret_key, secure=False)

# buckets = client.list_buckets()
# for bucket in buckets:
#     print(bucket.name, bucket.creation_date)

bucket_name = "images"
object_name = "picture.png"

print(client.fput_object(bucket_name, object_name, "me.png"))



# * rest endpoint -> User uploads pic
# * pic -> generate a uuid
# * uuid -> store minio server
# * store image name in database (mysql/mongo)

{
    post: asdfasdf,
    text: "hello world",
    image: "min.io/randomimage",
    background-color: teal,
}