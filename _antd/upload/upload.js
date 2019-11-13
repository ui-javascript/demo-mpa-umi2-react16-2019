import {Button, Upload, Icon, message, Divider } from "antd"

import reqwest from 'reqwest';

class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('file', fileList[0])

    // fileList.forEach(file => {
    //   formData.append('files[]', file);
    // });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'http://localhost:8080/demo/upload/local',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div className="mt-5">
        <Upload {...props}>
          <Button>手动上传</Button>
        </Upload>

        <Button
          icon="upload"
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{
            marginTop: 16,
            // marginLeft: 10
          }}
        >
          {uploading ? '上传中' : '开始上传'}
        </Button>


      </div>
    );
  }
}


function App() {

  const props = {
    name: 'file',
    action: 'http://localhost:8080/demo/upload/local',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      console.log('--返回------')
      console.log(info)

      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <div>
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> 点击上传
      </Button>
    </Upload>

    <Divider />

    <Demo />

    </div>
  );
}

ReactDOM.render(<App />, mountNode);

