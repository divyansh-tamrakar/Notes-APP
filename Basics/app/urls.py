from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutF, name='logout'),
    path('register', views.registerPage, name='register'),
    path('create_user', views.create_user, name='create_user'),
    path('delete_message/<str:pk>', views.delete_message, name='delete_message'),
    path('profile/<str:pk>', views.userProfile, name='user_profile'),

    path('', views.home, name='home'),
    path('room_page/<str:pk>', views.room, name='room'),
    path('create-room/', views.create_room, name='create_room'),
    path('update-room/<str:pk>', views.update_room, name='update_room'),
    path('delete-room/<str:pk>', views.delete_room, name='delete_room'),

    path('update-user/', views.updateUser, name='update_user'),
    path('topics/', views.topicsPage, name='topics'),
    path('activity/', views.activityPage, name='activity')
]