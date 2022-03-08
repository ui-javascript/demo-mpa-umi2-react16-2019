// import FormRender from 'form-render/lib/antd';
//
// const propSchema ={
//   type: "object",
//   properties: {
//     select: {
//       title: "单选",
//       type: "string",
//       enum: () => ["a", "b", "c"],
//       "ui:disabled": (value, rootValue, formData) => rootValue.input1.length > 5
//     },
//     input1: {
//       title: "输入框",
//       type: "string",
//       "ui:hidden": (value, rootValue, formData) => formData.select === "b"
//     }
//   }
// }
//
// class Playground extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       formData: {}
//     };
//   }
//
//   // 数据变化回调
//   onChange = value => {
//     console.info(value)
//
//     this.setState({
//       formData: value
//     });
//   }
//
//   // 数据格式校验回调
//   onValidate = list => {
//     // 数组返回未通过校验单的
//     console.log('校验回调')
//     console.log(list);
//   }
//
//   render() {
//     const { formData } = this.state;
//     return (
//       <FormRender
//         name="表单配置"
//         propsSchema={propSchema}
//         formData={formData}
//         onChange={this.onChange}
//         onValidate={this.onValidate}
//       />
//     );
//   }
// }
//
//
// // cdn引入
// ReactDOM.render(<Playground />, mountNode);
//
