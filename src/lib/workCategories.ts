export type WorkCategory = 'game' | 'web' | 'other';

export const WORK_CATEGORY_LABELS: Record<WorkCategory, string> = {
  game: 'ゲーム',
  web: 'Web',
  other: 'その他',
};

/** フィルターボタンの並び順 */
export const WORK_CATEGORY_ORDER: WorkCategory[] = ['game', 'web', 'other'];
