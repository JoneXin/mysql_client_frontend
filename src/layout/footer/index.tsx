import { defineComponent } from 'vue';
import styles from './index.module.less';

export default defineComponent({
  name: 'PageFooter',
  components: {},
  setup() {
    return () => (
      <>
        <div class={styles.pagefooter}></div>
      </>
    );
  },
});
