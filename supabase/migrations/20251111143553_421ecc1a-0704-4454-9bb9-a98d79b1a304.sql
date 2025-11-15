-- Add SELECT policy to allow viewing contact submissions
CREATE POLICY "allow_public_select"
ON public.contacts_data
FOR SELECT
USING (true);

-- Also add UPDATE and DELETE policies for admin access (optional)
CREATE POLICY "allow_public_update"
ON public.contacts_data
FOR UPDATE
USING (true);

CREATE POLICY "allow_public_delete"
ON public.contacts_data
FOR DELETE
USING (true);