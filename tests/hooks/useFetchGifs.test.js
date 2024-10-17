import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
  test("Debe de retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("OnePunch"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
    //console.log(result);
  });

  test("Debe de retornar un arreglo de imágenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("OnePunch"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 1000,
      }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    //console.log(result);
  });
});
