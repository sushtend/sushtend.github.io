Yes. Here is the **closest practical mapping** from token demand to **GPU count, power, and data center build-out**.

I’m using a **simple normalized model** so the numbers stay readable:

* **Today public baseline token demand**: ~**50 trillion tokens/day**, or about **1.5 quadrillion/month**. ([Fireworks AI][1])
* **2040 token demand**: from **your earlier assumptions**

  * Low: **64.4 quadrillion/month**
  * Medium: **193.2 quadrillion/month**
  * Heavy: **966 quadrillion/month**
* **Throughput assumption**: **100 tokens/sec per H100-class GPU**, rounded from Together’s public **117 tokens/sec on Llama-2-70B-Chat**. This is only a modeling anchor, not a hard industry average. ([Together AI][2])
* **Power assumption**: H100 max TDP **700W**. ([NVIDIA][3])
* **PUE assumption for model**: **1.2**. For reference, Google reported **1.09** fleet-wide in 2024, versus an **industry average of 1.56**. ([Google Data Centers][4])
* **Rack density**:

  * **32 GPUs/rack** as a standard H100-era planning number from CoreWeave’s MLPerf note. ([coreweave.com][5])
  * **64 GPUs/rack** for dense liquid-cooled AI racks from Supermicro. ([supermicro.com][6])

## A. H100-equivalent capacity needed

| Scenario                  |    Monthly tokens | Avg H100-equivalent GPUs needed | Approx facility power | Approx yearly electricity |       32-GPU racks |      64-GPU racks | 100 MW sites | 1 GW campuses |
| ------------------------- | ----------------: | ------------------------------: | --------------------: | ------------------------: | -----------------: | ----------------: | -----------: | ------------: |
| **Today public baseline** |   1.5 quadrillion |                 **5.8 million** |            **4.9 GW** |           **42.6 TWh/yr** |           **181k** |           **90k** |       **49** |       **4.9** |
| **2040 low**              |  64.4 quadrillion |               **248.5 million** |          **208.7 GW** |          **1,828 TWh/yr** |   **7.76 million** |  **3.88 million** |    **2,087** |     **208.7** |
| **2040 medium**           | 193.2 quadrillion |               **745.4 million** |          **626.1 GW** |          **5,484 TWh/yr** |  **23.29 million** | **11.65 million** |    **6,261** |     **626.1** |
| **2040 heavy**            |   966 quadrillion |                **3.73 billion** |           **3.13 TW** |         **27,420 TWh/yr** | **116.48 million** | **58.24 million** |   **31,306** |   **3,130.6** |

**How to read this:** if you tried to serve your 2040 token assumptions with **today-like H100-class economics and density**, the required build-out becomes enormous. That is the key point.

## B. What this means in plain English

| Item             | Today                                                  | 2040 takeaway                                                                      |
| ---------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| **GPU need**     | Already in the **millions** at global scale            | Your 2040 model needs **hundreds of millions to billions** of H100-equivalent GPUs |
| **Power**        | Already **multi-gigawatt** scale                       | 2040 only works if compute gets much more efficient                                |
| **Data centers** | Order of **a few 1 GW campuses** globally is plausible | 2040 would need **many more gigawatt-scale campuses** if hardware stayed similar   |

For context, OpenAI said Stargate was aiming for a **10 GW commitment**, and separately announced **4.5 GW** of additional U.S. capacity with Oracle. ([OpenAI][7])

## C. More realistic 2040 view, if hardware gets much better

This is why 2040 almost certainly will **not** be served on plain H100-like economics.

NVIDIA says:

* **GB200 NVL72** delivers **30x faster** real-time LLM inference, and has **72 GPUs in one rack-scale system**. ([NVIDIA][8])
* Blackwell was announced as enabling some GenAI workloads at up to **25x less cost and energy** than Hopper, on NVIDIA’s stated workload framing. ([NVIDIA Newsroom][9])

So here is a **best-case sanity check** where 2040 hardware is roughly **25x more efficient** than H100-class infrastructure for the same token service.

| 2040 scenario | H100-equivalent GPUs / 25 | Approx facility power / 25 | Approx yearly electricity / 25 | 64-GPU racks / 25 | 1 GW campuses / 25 |
| ------------- | ------------------------: | -------------------------: | -----------------------------: | ----------------: | -----------------: |
| **Low**       |           **9.9 million** |                **8.35 GW** |                **73.1 TWh/yr** |          **155k** |            **8.3** |
| **Medium**    |          **29.8 million** |                **25.0 GW** |               **219.4 TWh/yr** |          **466k** |           **25.0** |
| **Heavy**     |         **149.1 million** |               **125.2 GW** |             **1,096.8 TWh/yr** |  **2.33 million** |          **125.2** |

## D. Bottom line

| Question                                                                                                         | Closest answer                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Can today’s frontier-model infrastructure serve your 2040 token assumptions as-is?**                           | **No**                                                                                                   |
| **Can it become possible with much better chips, better batching, smaller models, caching, and custom silicon?** | **Yes, in the low to maybe medium case**                                                                 |
| **What breaks first if demand runs too fast?**                                                                   | **Power, data center land, cooling, grid access, and GPU supply**                                        |
| **What does this tell us?**                                                                                      | **Token demand can grow much faster than infrastructure unless compute efficiency keeps improving hard** |

## E. The main insight

Your **2040 low case** starts to look believable **only if** all of these happen together:

* much better inference efficiency
* more small and specialist models
* heavy caching and retrieval
* custom chips, not just general frontier GPUs
* many more gigawatt-class campuses

Without that, the raw H100-style build-out gets too large.

If you want, I can next make this into a **single compact table with Today vs 2040 Low/Medium/Heavy plus a “25x better hardware” column** so it fits nicely in one slide.

[1]: https://fireworks.ai/blog/state-of-agent-environments?utm_source=chatgpt.com "50 Trillion Tokens Per Day: The State of Agent Environments"
[2]: https://www.together.ai/blog/together-inference-engine-v1?utm_source=chatgpt.com "Announcing Together Inference Engine – the fastest ..."
[3]: https://www.nvidia.com/en-us/data-center/h100/?utm_source=chatgpt.com "H100 GPU"
[4]: https://datacenters.google/discover-more/faq?utm_source=chatgpt.com "Frequently asked questions"
[5]: https://www.coreweave.com/blog/coreweave-nvidia-and-ibm-set-mlperf-record-with-largest-nvidia-gb200-blackwell-cluster-achieving-over-2x-faster-training?utm_source=chatgpt.com "CoreWeave, NVIDIA, and IBM Set MLPerf Record with ..."
[6]: https://www.supermicro.com/en/solutions/rack-integration?utm_source=chatgpt.com "Rack Scale Solutions"
[7]: https://openai.com/index/five-new-stargate-sites/?utm_source=chatgpt.com "OpenAI, Oracle, and SoftBank expand Stargate with five ..."
[8]: https://www.nvidia.com/en-in/data-center/gb200-nvl72/?utm_source=chatgpt.com "GB200 NVL72 | NVIDIA"
[9]: https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing?utm_source=chatgpt.com "NVIDIA Blackwell Platform Arrives to Power a New Era of ..."
