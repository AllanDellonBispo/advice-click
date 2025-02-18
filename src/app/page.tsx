"use client";

import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "./components/ui/input";
import { CardAdvice } from "./components/ui/cardAdvice";
import { Button } from "./components/ui/button";
import { Advice, randomAdvice, SearchAdviceResponse, serachAdvices } from "@/hooks/useAdvice";
import { useState } from "react";

export default function Page() {

  const [advice, setAdvice] = useState<Advice | null>(null);
  const [textSearch, setTextSearch] = useState<string>('');
  const [advices, setAdvices] = useState<SearchAdviceResponse | null>(null);

  const handleSearch = async () => {
      setAdvices(null);
      const a = await randomAdvice();
      setAdvice(a);
  }

  const handleTextSearch = async () => {
      const res = await serachAdvices(textSearch);
      setAdvices(res);
  }

  return (
    <>
      <header className="flex justify-end p-4 cursor-pointer mt-2">
        <FontAwesomeIcon icon={faBars} className="size-8" />
      </header>
      <main className="flex flex-col justify-center items-center gap-6">
        <Input type="text" icon={faSearch} placeholder="Pesquise um conselho" onChange={e => setTextSearch(e)} onClick={textSearch.length > 4 ? handleTextSearch: () => {}} />
        
        {advices ? (
          <>
            {advices.slips.map((item, index) => (
              <CardAdvice key={item.id} text={item.advice} numberAdvice={index+1} />
            ))}
              <Button name="VER CONSELHOS" onClick={handleSearch} />
          </>
          ) : (
            <>
              <CardAdvice text={advice ? advice.slip.advice : 'Clique abaixo e veja o CONSELHO que te aguarda hoje'} />
              <Button name="VER CONSELHO" onClick={handleSearch} />
            </>
)}
      </main>
    </>
  );
}
