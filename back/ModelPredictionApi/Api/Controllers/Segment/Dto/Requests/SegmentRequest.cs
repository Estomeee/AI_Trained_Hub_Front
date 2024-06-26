using Newtonsoft.Json;

namespace Api.Controllers.Segment.Dto.Requests;

/// <summary>
/// Запрос на задачу сегментирования
/// </summary>
public record SegmentRequest
{
    /// <summary>
    /// Идентификатор обученной модели
    /// </summary>
    [JsonProperty("modelId")]
    public required Guid ModelId { get; init; }

    /// <summary>
    /// Идентификатор файла, на котором будет производиться предикт
    /// </summary>
    [JsonProperty("fileId")]
    public required Guid FileId { get; init; }
}