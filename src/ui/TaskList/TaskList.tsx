import styles from './TaskList.module.scss';

type TProps = {
  onClick: () => void;
};

const TaskList = ({ onClick }: TProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        elementum ligula diam, egestas imperdiet nulla euismod et. Quisque
        aliquet eget felis id mollis. Sed sed felis in odio tincidunt eleifend.
        Vivamus tristique pretium nisi vel ornare. Aliquam vel quam at risus
        ornare dapibus vulputate ac mi. Maecenas eleifend mauris non est tempor
        rutrum. Nullam sagittis turpis id tortor semper viverra. Nunc dolor
        elit, posuere sed semper ut, pellentesque a massa. Vestibulum pharetra
        congue massa ac faucibus. In tincidunt augue ut ligula condimentum
        laoreet. Curabitur vitae sapien fermentum diam eleifend placerat ac vel
        elit. Nullam enim magna, viverra ut arcu non, laoreet commodo elit.
        Etiam at aliquet purus, id finibus nibh. Vivamus condimentum auctor
        dolor a sodales. Aliquam vulputate venenatis quam quis efficitur.
      </p>
    </div>
  );
};

export default TaskList;
