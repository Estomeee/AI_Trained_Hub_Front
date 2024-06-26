﻿using Api.Controllers.File.Dto.Request;
using Api.Controllers.File.Dto.Response;
using AutoMapper;
using Logic.Records.File.Params;
using Logic.Records.File.Results;

namespace Api.Controllers.File.Profiles;

/// <summary>
/// Маппинг классов, связанных с файлом
/// </summary>
public class FileMappingProfile : Profile
{
    public FileMappingProfile()
    {
        CreateMap<UpdateFileRequest, UpdateFileParam>()
            .ForMember(x => x.FileId, y => y.MapFrom(z => z.FileId));
    }
}