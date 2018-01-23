# Fixnav

这是一款超轻量级的 jQuery 插件。 它可以让原本不是在顶部的导航条，在滚动到它的位置时固定在顶部。

## 开发背景

由于开发某些网页，需要用到导航条滚动时固定在顶部（原来并非在顶部）的效果，曾经试过
jQuery.pin 以及 stickUp ，但都有些小BUG，于是就决定自己开发这款插件。

## 更新日志

### V1.0.0
正式发布

## 开发人员

本插件由本人 Luofeng Zhang 独立开发，您可以：[查看我的个人介绍](http://www.zhchina.top)

## 依赖

本插件依赖 jQuery，使用本插件时，需要引入 jQuery 。

## 安装指南

1. 在引入 jQuery 后，引入 Fixnav.js 。 
2. 然后在 `$(function(){})` 里使用 `$(selector).fixnav()` 即可。