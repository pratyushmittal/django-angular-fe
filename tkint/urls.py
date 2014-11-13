from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from authentication.views import UserCreateView, LoginView

urlpatterns = patterns('',
    url('^api/v1/auth/register/$', UserCreateView.as_view(), name='create_user'),
    url('^api/v1/auth/login/$', LoginView.as_view(), name='login_user'),

    # Static should be last
    url(r'^', TemplateView.as_view(template_name='index.html')),
)
