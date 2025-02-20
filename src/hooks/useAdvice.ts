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
      if(!response.ok) throw new Error(`Error for advice search: ${response.status} ${response.statusText}`);
      
      const data: Advice = await response.json();

      return data;
    } catch (error) {
      console.error("Error for advice search:", error);
      return null;
    }
  }

  export async function serachAdvices(text: string): Promise<SearchAdviceResponse | null> {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice/search/${text}`);
      if(!response.ok) throw new Error(`Error for advice search: ${response.status} ${response.statusText}`);
  
      const data: SearchAdviceResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error for advice search:", error);
      return null;
    }
  }
