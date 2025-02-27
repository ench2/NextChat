import { useChatStore, useAccessStore } from "../store";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useEffect } from "react";
import { useStore1 } from "../utils/store1";

const queryParam = () => {
  const accessStore = useAccessStore.getState();

  console.log("code", window.location);
  let s = window.location.hash;

  s.indexOf("?") > -1 ? (s = s.split("?")[1]) : (s = s);

  const urlParams = new URLSearchParams(s);

  const code = urlParams.get("code1");

  if (code) {
    console.log("code", code);
    accessStore.update((access) => (access.accessCode = code));

    const model_p = urlParams.get("model");
    const msg = urlParams.get("msg");

    const { data, setData, clearData } = useStore1.getState();

    setData({
      model: model_p,
      msg: msg,
    });

    window.location.hash = "#/chat-param";
  }
};

export function ChatParam() {
  const chatStore = useChatStore();
  const navigate = useNavigate();

  const startChat = () => {
    setTimeout(() => {
      // chatStore.newSession();
      navigate(Path.Chat);
    }, 10);
  };

  useEffect(() => {
    console.log("ChatParam useEffect");

    queryParam();
    startChat();
  }, []);

  return "<div>ChatParam</div>";
}
