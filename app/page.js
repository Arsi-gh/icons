import Icon from "@/components/icon";
import SnippetWrapper from "@/components/snippetWrapper";
import { icons } from "@/data/icons";

export default function Home() {
  return (
    <main className="px-3 pt-0 pb-12 flex flex-wrap gap-2 overflow-auto">
      <b className="mt-3 w-full py-3 text-3xl">React icons type shit</b>
      <SnippetWrapper>
        npm install react-icons --save
      </SnippetWrapper>
      {icons.map(obj => obj.isTitle == true ? <b className="mt-3 w-full py-3 text-3xl" key={obj.id}>{obj.title}</b> : <Icon key={obj.id} {...obj}/> )}
    </main>
  );
}
