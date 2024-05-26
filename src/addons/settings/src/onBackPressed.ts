import usePathStore from './store/path';

const { getState, setState } = usePathStore;
const onBackPressed = (): boolean => {
  const path = getState().path;
  if (path !== '--') {
    setState({
      path: '--',
    });
    return false;
  }
  return true;
};

export default onBackPressed;
