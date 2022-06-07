import {
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
  Button,
  Divider,
} from 'ant-design-vue';

import type { App as VueInstance } from 'vue';

// import { AButton } from '@/components/basic/button/index';

export function setupAntd(app: VueInstance<Element>) {
  // app.component('AButton', AButton);
  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(DatePicker)
    .use(Button)
    .use(Divider);
}
