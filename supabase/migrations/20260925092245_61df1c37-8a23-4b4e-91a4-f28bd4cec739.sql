CREATE POLICY "Trusted server manages inquiries"
ON public.inquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);