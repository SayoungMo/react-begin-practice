// 项目根组件

// 1.引入react基本包
import React from 'react';

/**
 * class 定义组件关键字
 * App 组件名称 必须以大写字母开头
 * React.Component 组件的父类（基本的组件）
 * extends 继承
 */
class App extends React.Component{
    // 组件必须有返回值（有且只有一个根元素）
    // render渲染组件的函数
    render(){
        return  <div>Fay, nice to meet you!</div>
    }
}

// 导出组件
export default App