import { createClient } from "@supabase/supabase-js";
/* const {
  REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY
} = process.env;
 */
/* export const supabase = createClient(
  `${REACT_APP_SUPABASE_URL}`,
  `${REACT_APP_SUPABASE_KEY}`
);
 */
export const supabase = createClient(
  "https://lbjfmccixgvynavxiniq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiamZtY2NpeGd2eW5hdnhpbmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzQ4MzYsImV4cCI6MTk3NTIxMDgzNn0.FmnCGavLPlLv_3r2GDZC5-9qwtdROIdtcxQEFvoAZzI"
);
