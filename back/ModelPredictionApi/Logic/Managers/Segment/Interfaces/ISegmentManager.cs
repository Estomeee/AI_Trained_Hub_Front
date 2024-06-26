﻿using Logic.Records.Segment.Params;
using Logic.Records.Segment.Results;

namespace Logic.Managers.Segment.Interfaces;

/// <summary>
/// Менеджер для задачи сегментирования
/// </summary>
public interface ISegmentManager
{
    /// <summary>
    /// Сделать предикт для задач сегментирования
    /// </summary>
    public Task<SegmentResult> SegmentAsync(SegmentParam segmentParam);
}