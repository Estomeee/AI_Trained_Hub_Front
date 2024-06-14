namespace Logic.Records.Detect.Results;

/// <summary>
/// Результат обнаружения
/// </summary>
public class DetectResult
{
    /// <summary>
    /// Идентификатор файла с предиктом
    /// </summary>
    public required Guid PredictedFileId { get; init; }
}