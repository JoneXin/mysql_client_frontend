import { defineComponent } from 'vue';
import styles from './index.module.less';

export default defineComponent({
  name: 'PageHeader',
  components: {},
  setup() {
    return () => (
      <>
        <div class={styles.pageheader}>
          <div class={styles['icon-box']}></div>
          <div class={styles['menu-box']}></div>
        </div>
      </>
    );
  },
});
