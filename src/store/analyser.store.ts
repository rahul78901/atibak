import { create } from "zustand";

type AnalyserStoreType = {
  context?: AudioContext;
  source?: MediaElementAudioSourceNode;
  node?: AnalyserNode;
};

const useAnalyserStore = create<AnalyserStoreType>(() => ({}));

const { setState: set, getInitialState: initial } = useAnalyserStore;

const setAnalyser = (audio: HTMLAudioElement): void => {
  const context = new window.AudioContext();
  const source = context.createMediaElementSource(audio);
  const node = context.createAnalyser();

  source.connect(node);
  node.connect(context.destination);

  set({
    context,
    source,
    node,
  });
};

const destroyAnalyser = (): void => set(initial());

export { setAnalyser, destroyAnalyser };

export default useAnalyserStore;
