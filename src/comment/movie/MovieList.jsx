import React, { Component } from 'react'
import { Spin, Card ,Rate ,Pagination  } from 'antd'
const { Meta } = Card
import cssobj from '@/css/movie.scss'

export default class MovieList extends Component {
  constructor(props) {
    super()
    this.state = {
      mtype: props.match.params.type,//电影类型
      nowPage: props.match.params.page,//当前的页码值
      isloading: true,//是否正在加载数据,默认为加载中
      movielist: [],//电影列表
      pageSize: 10,//电影条数
      total:0,//总数据条数
    }
  }
  render() {
    //   console.log(this.props.match)
    return (
      <div>
        {this.state.isloading ? <div style={{ textAlign: 'center' }} >加载中<Spin size="large" /></div> : <div >
          <div className={cssobj.mlist} >
          {/* {console.log( this.props.match )} */}
          {
            this.state.movielist.map(item =>  <Card key={item.id}
              hoverable
              style={{ width: 210 }}
              className={cssobj.mitem}
              cover={<img alt="example" src={item.images.small} 
              onClick={ ()=>this.goDetail(item.id) }
              />}
            >
              <Meta
                title={item.title}
              />
              <p>电影类型: {item.genres.join(',')} </p>
              <Rate disabled defaultValue={ item.rating.average / 2 } />
            </Card>)
          }
        
          
          </div>
          {/* {console.log(this.state.nowPage)} */}
          <Pagination defaultCurrent={ parseInt(this.state.nowPage) } total={this.state.total} className={cssobj.mlist} defaultPageSize={this.state.pageSize}
          onChange={ (page,pageSize)=>this.pageChanged(page) }
          />
        </div>
        }
      </div>
    )
  }

  componentWillReceiveProps(nexProps) {
      // console.log(nexProps)
    this.setState({
      mtype: nexProps.match.params.type,
      nowPage: nexProps.match.params.page,
    }, function () {
      setTimeout(() => {
        this.getMovieList()
      }, 1000)
    })
  }

  componentWillMount() {
    // 获取电影列表数据
    setTimeout(() => {
      this.getMovieList()
    }, 1000)
  }
  getMovieList = async () => {
    const start = (this.state.nowPage - 1) * this.state.pageSize
    const res = await this.$http(this.baseURL + `/v2/movie/${this.state.mtype}?start=${start}&count=${this.state.pageSize} `)
    
    const data = await res.json()
    console.log(data)
    this.setState({
      movielist: data.subjects,
      isloading: false,
      total:data.total,
    })
  }
  //页码改变时候的回调函数
  pageChanged = (page) =>{
    //使用编程式导航
    console.log(page)
    this.props.history.push(`/movie/${this.state.mtype}/${page}`)
    // this.props.history.push(`/movie/${this.state.mtype}/${page}`)
  } 
  //点击跳转到详情页
  goDetail=(id)=>{
    // console.log(id)
    this.props.history.push(`/movie/detail/${id}`)

  }
}
