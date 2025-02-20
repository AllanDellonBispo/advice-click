// import { Advice, randomAdvice } from './useAdvice';
import request from "supertest";
import { Advice, randomAdvice } from "./useAdvice";
import fetch from "node-fetch"; 


    test("Check query status of API for function randomAdvice", async () => {
        const response = await request("https://api.adviceslip.com").get("/advice");

        const data = response.body && Object.keys(response.body).length > 0 ? response.body : JSON.parse(response.text);

        expect(response.status).toBe(200); // Verifica se a API responde corretamente
        expect(data).toHaveProperty("slip"); // Confere se existe a propriedade "slip"
        expect(data.slip).toHaveProperty("advice"); // Garante que dentro de "slip" existe "advice"
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



      test("Check API response with fetch", async () => {
        const response = await fetch("https://api.adviceslip.com/advice");      
        expect(response.status).toBe(200);
      });