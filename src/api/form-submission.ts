export const createCleverFlowRun = async (
    apiToken: string,
    runName: string,
    dataFields: { field: string; value: string }[]
  ) => {
    try {
      const response = await fetch("https://api.cleverflow.com/api/public/create_run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${apiToken}`,
        },
        body: JSON.stringify({
          name: runName,
          data: dataFields,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
      }
  
      const result = await response.json();
      console.log("Run created successfully:", result);
      return result;
    } catch (error) {
      console.error("Failed to create run:", error);
      throw error;
    }
  };
  