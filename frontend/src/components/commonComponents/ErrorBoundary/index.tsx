import { Component, ErrorInfo, ReactNode } from 'react';
import { notification, Button } from 'antd';
import { messages } from '../../../common/constants/messages.ts';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    notification.error({
      message: messages.view.errorBoundary.title,
      description: error.message,
      duration: 5,
    });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '200px 0px' }}>
          <h1>{messages.view.errorBoundary.title}</h1>
          <p style={{ margin: '20px 0px' }}>{messages.view.errorBoundary.description}</p>
          <Button
            type="primary"
            onClick={this.handleReset}
          >
            {messages.button.back}
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
