import React ,{Component,Image} from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../home.module.css';
import { Form, Input, Row, Col, notification, message,Button } from 'antd';
class Overview extends Component{
	constructor(props){
      super(props)
	}
	render(){
	  
		return (
			<div>
				<div className={styles.home_slide_bar}>
				<a href='#'><div className={styles.item}> <text style={{ fontSize: 14 }}>网站信息</text> </div></a>
				<a href='#'><div className={styles.item}> <text style={{ fontSize: 14 }}>邮件发送设置</text> </div></a>
				<a href='#'><div className={styles.item}> <text style={{ fontSize: 14 }}>第三方代码</text> </div></a>
				</div>
			<div className={styles.guide_main}>	
	
				<div className={styles.title_layout}>
					<text style={{ fontSize: 16,color:'#000000' }}>网站基本设置</text>
				</div>
				<div  className={styles.line}/>
				<Form >
				<div className={styles.row_layout}>
					
				<text style={{ fontSize: 14,color:'#666666' }}>网站名称</text>
                       <div className={[styles.input_item]}>
						<Form.Item >
						<Input 
								// onFocus={() => this.setState({focusItem: 0})}
								// onBlur={() => this.setState({focusItem: -1})}
								maxLength={16}
								placeholder='网站名称'
								style={{ width: '160%', marginLeft: '6%' }}
								/>
						</Form.Item>
                       </div>
					
				</div>

				<div  className={styles.line}/>

				<div className={styles.row_layout}>
					
					<text style={{ fontSize: 14,color:'#666666' }}>网站地址</text>
						   <div className={[styles.input_item]}>
							<Form.Item >
							<Input 
									// onFocus={() => this.setState({focusItem: 0})}
									// onBlur={() => this.setState({focusItem: -1})}
									maxLength={16}
									placeholder='网站地址'
									style={{ width: '160%', marginLeft: '6%' }}
									/>
							</Form.Item>
						   </div>
						
					</div>

				<div  className={styles.line}/>

					<div className={styles.row_layout}>
					<text style={{ fontSize: 14,color:'#666666' }}>网站LOGO</text>
					<img src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt="" width={180} height={60}/>
					 <Button>上传</Button>&emsp;
					 <Button>外接图片链接</Button>&emsp;
					 {/* <Button type="primary">Primary</Button>&emsp;
					 <Button type="dashed">Dashed</Button>&emsp;
					<Button type="danger">Danger</Button> */}
					<text style={{ fontSize: 14,color:'#666666' }}>建议尺寸 180 * 60 (像素)</text>
					</div>

				<div  className={styles.line}/>
				
					<div className={styles.row_layout}>
					<text style={{ fontSize: 14,color:'#666666' }}>手机网站LOGO</text>
					<img src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt="" width={180} height={50}/>
					 <Button>上传</Button>&emsp;
					 <Button>外接图片链接</Button>&emsp;
					 {/* <Button type="primary">Primary</Button>&emsp;
					 <Button type="dashed">Dashed</Button>&emsp;
					<Button type="danger">Danger</Button> */}
					<text style={{ fontSize: 14,color:'#666666' }}>建议尺寸 180 * 50 (像素)</text>
					</div>


				<div  className={styles.line}/>
				
				<div className={styles.row_layout}>
				<text style={{ fontSize: 14,color:'#666666' }}>地址栏图标</text>
				<img src={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} alt="" width={32} height={32}/>
				 <Button>上传</Button>&emsp;
				 <Button>外接图片链接</Button>&emsp;
				<text style={{ fontSize: 14,color:'#666666' }}>建议尺寸 32 * 32 (像素)</text>
				</div>
				</Form>
				<div  className={styles.line}/>
				<div>何清林<FormattedMessage id="overview.title" description="哈哈哈"/></div>
			</div>
	
			</div>
		);

	}
}

export default Overview;