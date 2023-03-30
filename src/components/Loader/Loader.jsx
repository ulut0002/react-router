// source: https://www.npmjs.com/package/@uiball/loaders
import { Ring } from "@uiball/loaders";

function Loader({ isLoading }) {
  return (
    <div aria-live="polite" aria-busy={isLoading}>
      {isLoading && <Ring />}
    </div>
  );
}
export default Loader;
