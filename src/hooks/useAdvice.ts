export interface Advice {
    slip:{
        id: number;
        advice: string;
    }
}

export interface SearchAdviceResponse {
    total_results: string;
    query: string;
    slips: Advice["slip"][]; // Array de conselhos
}

export async function randomAdvice(): Promise<Advice | null> {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) throw new Error("Erro ao buscar o conselho");
  
      const data: Advice = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar conselho:", error);
      return null;
    }
  }

  export async function serachAdvices(text: string): Promise<SearchAdviceResponse | null> {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/search/${text}`);
      if (!response.ok) throw new Error("Erro ao buscar o conselho");
  
      const data: SearchAdviceResponse = await response.json();
      console.log(data);
    //   const teste[] = data.slips;
      return data;
    } catch (error) {
      console.error("Erro ao buscar conselho:", error);
      return null;
    }
  }
