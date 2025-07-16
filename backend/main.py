from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from agents.summerizationAgent import get_summarization_agent, summarize_content

app = FastAPI()

class SummarizeRequest(BaseModel):
    text: str = None

@app.post("/summarize")
async def summarize_endpoint(request: SummarizeRequest = None):
    try:
        # Use the async function
        if request and request.url:
            result = await summarize_content(request.url)
        else:
            result = await summarize_content()
        
        return {"summary": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize-default")
async def summarize_default(SummarizeRequest: SummarizeRequest = None):
    """Summarize the default URL"""
    try:
        result = await get_summarization_agent(SummarizeRequest)
        return {"summary": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Summarization API is running"}