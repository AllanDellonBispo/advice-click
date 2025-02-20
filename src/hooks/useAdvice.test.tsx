// import { Advice, randomAdvice } from './useAdvice';
import request from "supertest";
import { randomAdvice } from "./useAdvice";


    test("Check query status of API for function randomAdvice", async () => {
        const response = await request("https://api.adviceslip.com").get("/advice");
        expect(response.status).toBe(200); // Verifica se a API está respondendo
      });

      test("Check query status of API for function serachAdvices", async () => {
        const response = await request(`https://api.adviceslip.com`).get("/advice/search/people");
        expect(response.status).toBe(200); // Verifica se a API está respondendo
      });


      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ slip: { id: 1, advice: "Test of advice" } }),
        })
      ) as jest.Mock;
      
      test("Check query status of API for function randomAdvice for mock", async () => {
        const advice = await randomAdvice();
        expect(advice).toBeDefined();
        expect(advice?.slip.advice).toBe("Test of advice");
      });