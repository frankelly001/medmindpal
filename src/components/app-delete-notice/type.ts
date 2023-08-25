export type DeleteNoticeProps = {
  visible: boolean;
  onDelete: () => void;
  onCancel: () => void;
  noticeLabel: string | Object;
};
