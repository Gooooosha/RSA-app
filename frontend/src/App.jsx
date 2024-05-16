import { Button, Form, Input, InputNumber, Tabs } from "antd";
import './App.css';

const { TextArea } = Input;

const validateMessages = {
  required: '',
};

const items = [
  {
    key: '1',
    label: 'Алгоритм RSA',
    children: <div className="flex justify-center">
      <Form
        name="register"
        className='flex flex-col items-center'
        validateMessages={validateMessages}
      >
        <Form.Item
          name='message'
          rules={[{ required: true }]}
        >
          <TextArea rows={5} className='w-80' placeholder="Введите сообщение" />
        </Form.Item>
        <Form.Item
          name='e'
          rules={[{ required: true }]}
        >
          <InputNumber className='w-80' placeholder="Введите e" />
        </Form.Item>
        <Form.Item
          name='n'
          rules={[{ required: true }]}
        >
          <InputNumber className='w-80' placeholder="Введите n" />
        </Form.Item>
          <Form.Item>
            <Button className="w-80" htmlType="submit">
              Получить подпись
            </Button>
          </Form.Item>
      </Form>
      <TextArea className='w-80 ml-8' />
    </div>

  },
  {
    key: '2',
    label: 'Алгоритм EG',
    children: 'Content of Tab Pane 2',
  },
];

function App() {
  return (
    <>
      <Tabs defaultActiveKey="1" centered items={items} size='large' />

    </>
  )
}

export default App
