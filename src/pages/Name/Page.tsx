import { Page } from "../../Router";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import classes from "./Page.module.scss";
import { fileApi } from "../../api/reducers/fileApi";
import { modelApi } from "../../api/reducers/modelApi";
import { ButtonUpload } from "../../components/ButtonUpload/ButtonUpload";

const Name: Page = () => {
  const [model, setModel] = useState<
    "classify" | "detect" | "pose" | "segment"
  >("classify");
  const [fileId, setFileId] = useState<string>("");
  const [modelId, setModelId] = useState<string>("");
  const [linkImg, setLinkImg] = useState<string>("");

  const [uploadTrigger] = fileApi.useUploadMutation();
  const [downloadTrigger] = fileApi.useLazyDownloadQuery();
  const [classifyTrigger] = modelApi.useClassifyMutation();
  const [detectTrigger] = modelApi.useDetectMutation();
  const [poseTrigger] = modelApi.usePoseMutation();
  const [segmentTrigger] = modelApi.useSegmentMutation();

  const modelTriggers = {
    classify: classifyTrigger,
    detect: detectTrigger,
    pose: poseTrigger,
    segment: segmentTrigger,
  };

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value == "1") return;
    setModel(event.target.value as "classify" | "detect" | "pose" | "segment");
  };

  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FormData();
    if (e.target.files === null) return "";
    data.append("file", e.target.files[0]);
    const result = await uploadTrigger(data);
    console.log(result);

    if (result.data?.fileId) return result.data.fileId;
    alert("Не удалось загрузить файл");
    return "";
  };

  const onHandlerClick = async () => {
    const request = modelTriggers[model];
    const { data: resPredict } = await request({
      fileId: fileId,
      modelId: modelId,
    });
    if (!resPredict) {
      alert("Возникли проблемы, попробуйте позже");
      return;
    }
    const linkPredict = await downloadTrigger(resPredict.predictedFileId);

    linkPredict.data && setLinkImg(linkPredict.data);
  };

  return (
    <div className={classes["wrapper"]}>
      <ButtonUpload
        startLabel="Загрузить изображение"
        className={classes["div1"]}
        onChange={async (e) => {
          const id = await upload(e);
          setModelId(id);
        }}
      />
      <ButtonUpload
        startLabel="Загрузить модель"
        className={classes["div2"]}
        onChange={async (e) => {
          const id = await upload(e);
          setFileId(id);
        }}
      />

      <FormControl className={classes["div3"]}>
        <InputLabel id="select-label">Модель</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={model}
          label="Модель"
          onChange={handleChange}
        >
          <MenuItem value={"classify"}>Classify</MenuItem>
          <MenuItem value={"detect"}>Detect</MenuItem>
          <MenuItem value={"pose"}>Pose</MenuItem>
          <MenuItem value={"segment"}>Segment</MenuItem>
        </Select>
      </FormControl>

      <Button
        disabled={Boolean(!modelId && !fileId)}
        className={classes["div4"]}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        size="large"
        onClick={() => onHandlerClick()}
      >
        Начать
      </Button>

      {linkImg && <img src={linkImg} alt="Результат" />}
    </div>
  );
};

export default Name;
