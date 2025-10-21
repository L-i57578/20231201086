from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("posts/", views.index, name="posts_index"),
    path("posts", views.posts, name="posts_api"),
    path("animations/", views.animations, name="animations"),
    path("animate/", views.animate, name="animate"),
    path("move/", views.move, name="move"),
    path("move-percent/", views.move_percent, name="move_percent"),
    path("animation-control/", views.animation_control, name="animation_control"),
    path("dynamic-posts/", views.dynamic_posts, name="dynamic_posts"),
    path("react-demo/", views.react_demo, name="react_demo"),
    path("hello-component/", views.hello_component, name="hello_component"),
    path("counter-demo/", views.counter_demo, name="counter_demo"),
    path("math-practice/", views.math_practice, name="math_practice"),
]