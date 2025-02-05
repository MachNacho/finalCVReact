import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string, autoFetch: boolean = true) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: autoFetch,
    error: null,
  });

  const fetchData = async () => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result: T = await response.json();
      setState({ data: result, loading: false, error: null });
    } catch (err) {
      setState({ data: null, loading: false, error: (err as Error).message });
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [url]);

  return { ...state, fetchData };
};

export default useFetch;
