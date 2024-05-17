import useSettingStore from './store';

const { getState, setState } = useSettingStore;
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
