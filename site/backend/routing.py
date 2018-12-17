# from channels.routing import ProtocolTypeRouter
from django.conf.urls import url

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
# import routing

from . import querymysql
from . import nlpconsumer

websocket_urlpatterns = [
    url(r'^ws/$', querymysql.QueryMysql),
    url(r'^nlp/(?P<method>\w+)/$', nlpconsumer.NlpConsumer)
]

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})


# application = ProtocolTypeRouter({
#     # Empty for now (http->django views is added by default)
# })