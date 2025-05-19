import { message, UploadProps } from 'antd';
import { API_LESSON_UPLOAD_IMAGE, API_LESSON_UPLOAD_VIDEO } from '@common/constants/api';

export const chooseType = [
  {
    label: 'Очный',
    value: 'offline',
  },
  {
    label: 'Заочный',
    value: 'online',
  },
  {
    label: 'Очный и заочный',
    value: 'both',
  },
];

export const imageDragger: UploadProps = {
  name: 'file',
  action: API_LESSON_UPLOAD_IMAGE,
  maxCount: 5,
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const videoDragger: UploadProps = {
  name: 'file',
  action: API_LESSON_UPLOAD_VIDEO,
  maxCount: 5,
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
