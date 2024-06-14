using Newtonsoft.Json;

namespace Api.Controllers.Detect.Dto.Responses;

/// <summary>
/// Ответ на задачу обнаружения
/// </summary>
public record DetectResponse
{
    /// <summary>
    /// Идентификатор файла с предиктом
    /// </summary>
    [JsonProperty("predictedFileId")]
    public Guid PredictedFileId { get; init; }
}