import time 
from django.http import JsonResponse 
from django.shortcuts import render 

# Create your views here. 
def index(request): 
    return render(request, "welcome/index.html", {
        "title": "Welcome My World APP",
        "message": "一个功能丰富的Django应用，包含多种交互功能和演示"
    })

def about(request):
    """关于页面"""
    return render(request, "welcome/about.html") 

def posts(request): 
    # Get start and end points 
    start = int(request.GET.get("start") or 0) 
    end = int(request.GET.get("end") or (start + 9)) 

    # Generate list of posts in the format "Post #X" 
    data = [] 
    for i in range(start, end + 1): 
        data.append(f"Post #{i}") 

    # Artificially delay speed of response 
    time.sleep(1) 

    # Return JSON response in the format {"posts": ["Post #1", "Post #2", ...]} 
    return JsonResponse({ 
        "posts": data 
    })

def animations(request):
    """CSS动画演示页面"""
    return render(request, "welcome/animations.html")

def animate(request):
    """字体大小动画演示页面"""
    return render(request, "welcome/animate.html")

def move(request):
    """位置移动动画演示页面"""
    return render(request, "welcome/move.html")

def move_percent(request):
    """百分比关键帧位置移动动画演示页面"""
    return render(request, "welcome/move_percent.html")

def animation_control(request):
    """JavaScript动画控制演示页面"""
    return render(request, "welcome/animation_control.html")

def dynamic_posts(request):
    """动态帖子管理演示页面"""
    return render(request, "welcome/dynamic_posts.html")

def react_demo(request):
    """React演示页面"""
    return render(request, "welcome/react_demo.html")

def hello_component(request):
    """Hello组件演示页面"""
    return render(request, "welcome/hello_component.html")

def counter_demo(request):
    """计数器演示页面"""
    return render(request, "welcome/counter_demo.html")

def math_practice(request):
    """数学练习页面"""
    return render(request, "welcome/math_practice.html")